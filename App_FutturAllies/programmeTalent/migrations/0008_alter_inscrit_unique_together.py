# Generated by Django 4.2 on 2024-11-04 10:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('programmeTalent', '0007_alter_inscrit_unique_together'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='inscrit',
            unique_together=set(),
        ),
    ]
