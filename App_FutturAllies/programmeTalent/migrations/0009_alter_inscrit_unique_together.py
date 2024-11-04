# Generated by Django 4.2 on 2024-11-04 11:17

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('programmeTalent', '0008_alter_inscrit_unique_together'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='inscrit',
            unique_together={('formation', 'user')},
        ),
    ]
