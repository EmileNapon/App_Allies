# Generated by Django 4.2 on 2024-11-11 16:47

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('programmeTalent', '0023_alter_annonce_date_publication_alter_annonce_heure'),
    ]

    operations = [
        migrations.AlterField(
            model_name='annonce',
            name='heure',
            field=models.DateField(default=datetime.date.today),
        ),
    ]