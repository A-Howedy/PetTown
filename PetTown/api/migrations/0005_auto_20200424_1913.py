# Generated by Django 3.0.3 on 2020-04-25 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20200424_1902'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organization',
            name='orgID',
            field=models.CharField(blank=True, max_length=128),
        ),
    ]
