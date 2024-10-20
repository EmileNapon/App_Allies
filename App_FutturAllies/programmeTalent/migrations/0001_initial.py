# Generated by Django 4.2.15 on 2024-10-18 14:25

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Formation', '0003_rename_nom_domaine_domaine_nom_domaine_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Formation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=200)),
                ('type', models.TextField(max_length=200, null=True)),
                ('niveau', models.CharField(max_length=800, null=True)),
                ('prix', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('duree', models.CharField(max_length=20)),
                ('nombre', models.IntegerField(null=True)),
                ('location', models.CharField(max_length=200)),
                ('resume', models.TextField(null=True)),
                ('description', models.TextField(max_length=800)),
            ],
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ModuleFormation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('formation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='programmeTalent.formation')),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Formation.module')),
            ],
        ),
        migrations.CreateModel(
            name='Seance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lieu', models.CharField(max_length=200)),
                ('date_formation', models.DateField(default=datetime.date(2024, 1, 20))),
                ('heure_debut', models.TimeField()),
                ('statut', models.CharField(choices=[('confirmé', 'Confirmé'), ('annulé', 'Annulé'), ('attente', 'Attente')], max_length=10)),
                ('ModuleFormation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='programmeTalent.moduleformation')),
            ],
        ),
        migrations.CreateModel(
            name='Inscrit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date.today)),
                ('id_group', models.IntegerField()),
                ('formation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='programmeTalent.formation')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='AffectationStage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_affectation', models.DateField(default=datetime.date.today)),
                ('group', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='programmeTalent.group')),
                ('inscrit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='programmeTalent.inscrit')),
            ],
        ),
    ]
