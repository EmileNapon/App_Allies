# Generated by Django 4.2 on 2024-11-18 16:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Offres', '0009_offerapplication_candidat_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offerapplication',
            name='candidat_id',
        ),
        migrations.AddField(
            model_name='offerapplication',
            name='candidat',
            field=models.ForeignKey(default=16, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
