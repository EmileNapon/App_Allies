# Generated by Django 4.2.15 on 2024-08-26 15:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_customuser_tel'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='tel',
            new_name='telephone',
        ),
    ]
