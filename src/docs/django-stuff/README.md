---
sidebar: auto
---

# Overview

Django is a web framework written in python. A web framework is a software that supports the development of dynamic web sites, applications and services. It's provides a set of tools and functionalities that solves many common problems such as, url routing, security, database access, sessions, template processing etc. Django is one of the most popular framework because of high level security. There are many biggest company are using Django such as Instagram, Mozilla etc.

## ORM

One of the most powerful features of Django is its Object-Relational Mapper (ORM), which enables you to interact with your database. The main goal of ORM is to send data between a database and models in an application. It maps a relation between the database and a model.

Model:

A model is a class that represents table or collection in our Database, and where every attribute of the class is a field of the table or collection. Example:-

```python
from django.db import models
    classInNeedInfo(models.Model):
        website = models.CharField(max_length =50)
        mail = models.CharField(max_length =50)
        address = models.CharField(max_length =50)
```

### Select-related & Prefetch-related

Select-related and prefetch-related mainly used for reducing the number of query execution time. Select-related follows foreign-key relationship selecting additional related data when it executes it. Prefetch-related does a separate lookup for each relationship and does the joining.

### Bulk-create

**We can insert data into the database using by Django admin panel Dashboard or by writing a script in the views file. Bulk-create method is one of the the ways to insert multiple records in the database table.**

### Reverse foreign-key

If we want to use reverse relationship one model to another model for this must be needed related_name

## Views

A view function is a python function that takes a web request and returns a web response. This response can be the HTML contents of a web page, or a redirect, or a 404 error, or an XML document, or an image, anything that a web browser can display. Django

views are divided into two major categories:-

### Function Based Views

Function based views are writing using a python function which receives HttpRequest object and returns an HttpResponse object.

Example:-

```python
fromdjango.shortcuts importrender, HttpResponse

from.models importInNeed

def inneed_view(request):
    data= InNeed.objects.all()
    context = {
        "datas": data
    }
    return HttpResponse(context)
```

## Django debug toolbar

The Django debug toolbar is a configurable set of panels that display various debug information about the current request and response when clicked , display more details about the panel's content.

## Class Based Views

Class-based views provide an alternative way to implement views as Python objects instead of functions. They do not replace function-based views, but have certain differences and advantages when compared to function-based views:

### Overview

Django rest framework is a powerful and flexible toolkit for building web API. It's main benefit is that it makes serialization much easier. Django rest framework is based on Django class-based views.

### API

API stands for Application Programming Interface. Imagine visiting a new restaurant. You're there to order food, and since you haven't been there before, you don't exactly know what type of food they serve. The waiter then approaches you with a menu so you can pick what you'd like to eat. After making your choice, the waiter then goes to the kitchen and gets your food. In this case, the waiter is the API who is connecting you to the kitchen.

### REST

REST stands for REpresentational State Transfer. It interacts with data stored on a web server. We are able to communicate with servers using the HTTP protocol.With these protocols, we can **Create** , **Read** , **Update** and **Delete** data – otherwise known as **CRUD** operations. We can do this by sending HTTP requests, and that is where REST comes in. REST simplifies the communication process by providing various HTTP methods/operations/verbs which we can use to send requests to the server. Such as GET, POST, PUT, DELETE

### Serialization

Serializers in Django REST Framework are responsible for converting objects into data types understandable by JavaScript and front-end frameworks. Serializers also provide de-serialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.

```python
classComment:
    def __init__ (self,email,content):
        self.email=emailself.content=content

    def create(self, validated_data):
        returnComment(**validated_data)
```

### ModelSerializer

ModelSerializer builds the serializer based on the model. It will automatically generate a set of fields for you, based on the model. It will automatically generate validators for the serializer. It includes simple default implementations of .create() and .update().

Example:-

```python
classInNeedInfoSerializer(serializers.ModelSerializer):
    classMeta:
        model =InNeedInfo
        fields =(" __all__")
```

HyperlinkedModelSerializer:

The HyperlinkedModelSerializer class is similar to the ModelSerializer class except that it uses hyperlinks to represent relationships, rather than primary keys. By default the serializer will include a url field instead of a primary key field.

```python
classInNeedSerializer(serializers.HyperLinkedModelSerialier):
    classMeta:
        model =InNeedInfo
        fields = ("id", "url", "title", "description)
```

### ListSerializer:

Here is the way to create and update multiple records at once in django rest framework using ListSerializer. This way is very sort and and give fast response.

```python
classPerson(models.Model):
    name = models.CharField(max_length =50)
    address=models.CharField(max_length=50)
```

## View

When building your API in Django using Django Rest Framework, you have two choices for writing the controllers: APIView or ViewSets.

### APIView

APIView provides a methods handler for HTTP verbs: get, post, put, patch and delete. But you'll need to write a method for each HTTP verb. Example:-

```python
classInNeedView(APIView):
    def get(self, request):
        inneed=InNeed.objects.all()
```

serializer= InNeedSerializer(inneed, many=True)return Response(serializer.data)

### Viewsets

A ViewSet is a class-based view, able to handle all of the basic HTTP requests: GET, POST, PUT, DELETE without hard coding any of the logic.

```python
classInNeedViewSet(serializers.ModelViewSet):
    queryset = InNeed.objects.all()
    serializer_class = InNeedSerializer
    http_method_names = ['get', 'post']
```
