# Chapter 4: Django Models (Data Blueprints)

In the previous chapters, we equipped our `heritage-shipping-ltd` website's frontend with amazing tools: [Frontend UI Components (Shadcn/UI Library)](01_frontend_ui_components__shadcn_ui_library__.md) for ready-made visual elements, [Tailwind CSS (Utility-First Styling)](02_tailwind_css__utility_first_styling__.md) for beautiful styles, and [Client-side Utility Hooks (Reusable UI Logic)](03_client_side_utility_hooks__reusable_ui_logic__.md) for smart, interactive behaviors. Our website looks good and is responsive!

But what about the actual *information* our shipping company needs to manage? Where do we store details about our services, customer shipments, vessels, or job postings? All that crucial information needs a place to live permanently. This is where **Django Models** come into play.

### What Problem Do Django Models Solve?

Imagine Heritage Shipping Ltd. is a busy library. Instead of just having books lying around, you need a highly organized system: a catalog. Each card in the catalog isn't a book itself, but a *blueprint* that describes a specific *type* of book (e.g., "Novel," "Biography"). On each "Novel" card, you'd define what information every novel *must* have: Title, Author, Publication Date, ISBN.

Django Models are precisely these "catalog cards" or **data blueprints** for your application's database. They define the structure for all the data our `heritage-shipping-ltd` website needs to store, such as:

*   **`Service`**: What are the types of shipping services we offer (Sea Freight, Air Freight)? What details do we need for each?
*   **`Shipment`**: What information makes up a shipment (Tracking Number, Origin, Destination, Status)?
*   **`User`**: What details do we store about a customer (Username, Email, Address)?

Without models, our application wouldn't know how to organize, save, or retrieve data from the database. It would be like trying to find a book in a library with no catalog at all!

### Core Concepts of Django Models

Django Models are essentially Python classes that tell Django: "This is what a piece of data looks like, and this is how it should be stored in the database." Each model usually maps to a table in our database.

Let's break down the key ideas:

#### 1. Model as a Class

Every Django Model is a Python class that inherits from `django.db.models.Model`. This inheritance gives it all the special powers to talk to the database.

**Example: A `Service` Model Blueprint**

For our shipping services, we might need a model called `Service`.

```python
# backend/shipping/models.py (simplified)
from django.db import models

class Service(models.Model):
    # This is where we'll define its 'fields'
    # For now, just imagine it's an empty blueprint
    pass
```

This `Service` class, when Django sees it, knows it needs to create a database table for our services.

#### 2. Fields: The Building Blocks of Your Blueprint

Just like a library catalog card has slots for "Title" and "Author," a Django Model has **fields**. Each field represents a piece of data that will be stored for every item of that model type. Django provides many types of fields to match different kinds of data:

| Django Field Type | What it's for                       | Example Use for Heritage Shipping |
| :---------------- | :---------------------------------- | :-------------------------------- |
| `CharField`       | Small text, like names or titles    | `name`, `tracking_number`         |
| `TextField`       | Longer text, like descriptions      | `description`, `message`          |
| `IntegerField`    | Whole numbers                       | `year_built`                      |
| `DecimalField`    | Numbers with decimals (e.g., prices)| `weight`, `quoted_price`          |
| `DateField`       | Dates (e.g., `2024-09-15`)          | `preferred_shipping_date`         |
| `DateTimeField`   | Dates and times                     | `estimated_delivery`, `created_at`|
| `BooleanField`    | True/False values                   | `is_active`, `is_featured`        |
| `EmailField`      | Email addresses                     | `email`                           |
| `ImageField`      | Uploaded images                     | `featured_image`                  |
| `JSONField`       | Flexible data storage (lists/dictionaries) | `features`, `specifications`   |

When you define a field, you often specify options like `max_length` (for `CharField`), `null=True` (can be empty in the database), or `blank=True` (can be empty in forms).

**Let's add fields to our `Service` model:**

```python
# backend/shipping/models.py (simplified)
from django.db import models
# ... other imports (like timezone if needed)

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.CharField(max_length=50, default='ship') # default icon
    # `auto_now_add=True` means Django sets this once when created
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        # This makes it easy to read when you look at services later
        return self.name
```
**Explanation:**
*   `name`: A `CharField` that can hold up to 100 characters.
*   `description`: A `TextField` for longer service descriptions.
*   `icon`: Another `CharField` for a short text representing an icon, with a default value.
*   `created_at`: A `DateTimeField` that automatically records when the service was added.
*   `__str__(self)`: This special method tells Django how to represent a `Service` object as a string (e.g., "Sea Freight") which is very helpful when viewing objects in the Django admin panel or debugging.

#### 3. Relationships: Connecting Blueprints

Real-world data is rarely isolated. A `Shipment` belongs to a `User`. A `ShipmentUpdate` belongs to a `Shipment`. These connections are called **relationships**. Django Models make it easy to define these links:

*   **`ForeignKey`**: This is the most common relationship. It says, "One item from *this* model is related to *one* item from *another* model, but that other model can have *many* of these items." For example, one `User` can have many `Shipment`s, but each `Shipment` has only one `User` (the customer who initiated it).

Let's define a `Shipment` model that links to a `User` and a `Vessel`:

```python
# backend/shipping/models.py (simplified)
from django.db import models
from django.contrib.auth import get_user_model # For Django's User model

# Get the custom User model defined in our project
User = get_user_model() 

class Vessel(models.Model):
    name = models.CharField(max_length=100)
    # ... other fields for Vessel

    def __str__(self):
        return self.name

class Shipment(models.Model):
    tracking_number = models.CharField(max_length=20, unique=True)
    # Links this shipment to a specific User
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    origin_port = models.CharField(max_length=100)
    destination_port = models.CharField(max_length=100)
    # Links this shipment to a specific Vessel
    vessel = models.ForeignKey(Vessel, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=20, default='pending')
    
    def __str__(self):
        return f"Shipment {self.tracking_number}"
```
**Explanation:**
*   `user = models.ForeignKey(User, ...)`: This line creates a link from `Shipment` to our `User` model.
    *   `User`: Specifies *which* model this `Shipment` is related to.
    *   `on_delete=models.CASCADE`: This is important! It means if the `User` associated with this shipment is deleted, all their related `Shipment` records will also be deleted. Other options exist, like `SET_NULL` (set the `user` field to `null` if the user is deleted).
    *   `null=True, blank=True`: Allows a `Shipment` to exist without being explicitly linked to a `User` (e.g., for anonymous quotes).
*   `vessel = models.ForeignKey(Vessel, ...)`: Similarly, this links a `Shipment` to a `Vessel`. If a `Vessel` is removed, its `vessel` field in `Shipment` becomes `null`.

### How Models Become Database Tables (Migrations)

Once you've defined your models in `backend/shipping/models.py`, Django doesn't automatically create the database tables. You need to tell it to! This is done through a process called **migrations**.

Think of migrations as a set of instructions for changing your database schema. When you change your model (e.g., add a new field or model), you run:

```bash
python manage.py makemigrations
```
This command looks at your `models.py` file, compares it to the last migration, and creates a small Python file (a migration file) that describes the changes needed for your database. It's like writing down "add a 'description' column to the 'Service' table."

Then, you apply these changes to the actual database by running:

```bash
python manage.py migrate
```
This command reads all the migration files and executes the necessary SQL commands to update your database. It's like telling the database: "Okay, go ahead and add that 'description' column!"

The `scripts/setup_production.py` script (and `scripts/setup_django_data.py` during development) includes `execute_from_command_line(['manage.py', 'migrate'])` to ensure these database structures are created when the project is set up.

### Under the Hood: Models and the Database

When you define a Django Model, you're not directly writing SQL code. You're writing Python code, and Django does the heavy lifting of translating that Python into database commands. This is thanks to Django's **Object-Relational Mapper (ORM)**.

The ORM is a powerful translator. It allows you to interact with your database using familiar Python objects and methods instead of raw SQL.

Here's a simplified sequence of what happens when you define a model and Django interacts with the database:

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant DjangoModel as Django Model (Python Class)
    participant DjangoORM as Django ORM (Translator)
    participant Database as Database (e.g., PostgreSQL)

    Dev->>DjangoModel: Defines `Service` class with `name` and `description` fields
    DjangoModel->>DjangoORM: "Here's my `Service` blueprint."
    DjangoORM->>DjangoORM: Translates blueprint into database schema instructions
    DjangoORM->>Database: Sends SQL command: "CREATE TABLE Service (name VARCHAR(100), description TEXT);"
    Database-->>DjangoORM: Confirms table created
    DjangoORM-->>Dev: Confirmation
    Dev->>DjangoModel: Wants to add a new Service: `Service.objects.create(name='Air Freight', description='Fast...')`
    DjangoModel->>DjangoORM: "Please save this new Service object."
    DjangoORM->>DjangoORM: Translates Python object into SQL INSERT statement
    DjangoORM->>Database: Sends SQL command: "INSERT INTO Service (name, description) VALUES ('Air Freight', 'Fast...');"
    Database-->>DjangoORM: Confirms data saved
    DjangoORM-->>Dev: Confirmation: Service added
```

Let's look at the actual (simplified) `models.py` file to see how `heritage-shipping-ltd` defines its data blueprints. You can find these definitions in `backend/shipping/models.py`.

#### `User` Model (`backend/shipping/models.py`)

This model extends Django's built-in `User` model, adding extra fields specific to our application like `phone`, `company`, and `address`.

```python
# backend/shipping/models.py (simplified)
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=100, blank=True)
    address = models.TextField(blank=True)
    # ... other fields like created_at, updated_at

    def __str__(self):
        return f"{self.username} - {self.email}"
```
**Explanation:**
*   `class User(AbstractUser)`: We inherit from Django's `AbstractUser` to get all the default user features (username, password, etc.) and then add our own custom fields.
*   `phone`, `company`, `address`: These are our custom fields. `blank=True` means these fields are optional when filling out forms.

#### `Service` Model (`backend/shipping/models.py`)

This is very similar to our example, defining our core shipping services.

```python
# backend/shipping/models.py (simplified)
from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    features = models.JSONField(default=list) # Stores a list of features
    icon = models.CharField(max_length=50)
    # ... created_at, updated_at
    
    def __str__(self):
        return self.name
```
**Explanation:**
*   `features = models.JSONField(default=list)`: This is interesting! It allows us to store a list of features (like "Door-to-door delivery," "Real-time tracking") directly within a single field for each service, without needing a separate table for features.

#### `Shipment` Model (`backend/shipping/models.py`)

This model captures all the details of a shipment and links it to other important models.

```python
# backend/shipping/models.py (simplified)
from django.db import models
from django.contrib.auth import get_user_model # For our User model

User = get_user_model() # Get our custom User model

class Shipment(models.Model):
    tracking_number = models.CharField(max_length=20, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    sender_name = models.CharField(max_length=100)
    recipient_name = models.CharField(max_length=100)
    origin_port = models.CharField(max_length=100)
    destination_port = models.CharField(max_length=100)
    # ... many more fields for cargo details, weight, dimensions, status
    
    def __str__(self):
        return f"Shipment {self.tracking_number} - {self.status}"
```
**Explanation:**
*   `tracking_number = models.CharField(max_length=20, unique=True)`: Ensures every shipment has a unique tracking number.
*   `user = models.ForeignKey(User, ...)`: As discussed, links to the customer who owns this shipment record.
*   The `Shipment` model has many more fields in the actual project, but these few give you the core idea of how it's structured.

The `backend/shipping/models.py` file also defines models for `Vessel` (our ships), `NewsArticle`, `JobPosting`, `ContactInquiry`, `Office`, `ShipmentUpdate` (for tracking events of a shipment), and `QuoteRequest`. Each of these is a blueprint for a specific type of data that `heritage-shipping-ltd` manages.

### Conclusion

You've now uncovered the backbone of our `heritage-shipping-ltd` application: **Django Models**. These "data blueprints" define the structure, types, and relationships of all the crucial information our shipping company needs to store, from `Service` offerings to individual `Shipment` details and `User` accounts. By using Python classes and Django's powerful ORM, we can manage our database efficiently without writing complex SQL queries.

With our data beautifully structured and organized, the next step is to make this data accessible to our frontend. In the next chapter, we'll learn about the [Django REST API (Backend Communicator)](05_django_rest_api__backend_communicator__.md), which acts as a bridge, allowing our frontend to request, send, and update data using these very models.

---

<sub><sup>**References**: [[1]](https://github.com/duttaturja-v2/heritage-shipping-ltd/blob/5b1bb363c463a5caff32e3a29cedf7676dfb34e4/backend/shipping/models.py), [[2]](https://github.com/duttaturja-v2/heritage-shipping-ltd/blob/5b1bb363c463a5caff32e3a29cedf7676dfb34e4/backend/shipping/serializers.py), [[3]](https://github.com/duttaturja-v2/heritage-shipping-ltd/blob/5b1bb363c463a5caff32e3a29cedf7676dfb34e4/scripts/setup_django_data.py), [[4]](https://github.com/duttaturja-v2/heritage-shipping-ltd/blob/5b1bb363c463a5caff32e3a29cedf7676dfb34e4/scripts/setup_production.py)</sup></sub>