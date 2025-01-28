from django.db import models
from django.utils.text import slugify


class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    image = models.URLField(max_length=200, blank=True, null=True)
    bio = models.TextField(blank=True)

    def __str__(self):
        return self.name


class StartUp(models.Model):
    title = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    views = models.PositiveIntegerField(default=0)
    description = models.TextField()
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to="startups/", blank=True, null=True)
    pitch = models.TextField(blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
