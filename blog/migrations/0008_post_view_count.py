# Generated by Django 5.1.2 on 2024-12-13 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_tag_post_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='view_count',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
