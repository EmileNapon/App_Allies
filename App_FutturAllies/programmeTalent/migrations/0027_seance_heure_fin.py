# Generated by Django 4.2 on 2024-11-14 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('programmeTalent', '0026_seance_formation'),
    ]

    operations = [
        migrations.AddField(
            model_name='seance',
            name='heure_fin',
            field=models.TimeField(null=True),
        ),
    ]
