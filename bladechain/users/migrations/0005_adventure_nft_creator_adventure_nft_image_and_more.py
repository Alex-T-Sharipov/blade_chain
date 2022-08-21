# Generated by Django 4.1 on 2022-08-21 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0004_rename_nft_adventure_nft"),
    ]

    operations = [
        migrations.AddField(
            model_name="adventure_nft",
            name="creator",
            field=models.CharField(default=None, max_length=255),
        ),
        migrations.AddField(
            model_name="adventure_nft",
            name="image",
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="adventure_nft",
            name="location",
            field=models.CharField(default="image", max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="adventure_nft",
            name="name",
            field=models.CharField(default="name", max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="adventure_nft",
            name="on_sale",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="adventure_nft",
            name="owner",
            field=models.CharField(default="owner", max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="adventure_nft",
            name="price",
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name="quest",
            name="alt",
            field=models.TextField(default="alt"),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="quest",
            name="body",
            field=models.TextField(default="body"),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="quest",
            name="image",
            field=models.TextField(default="image"),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="quest",
            name="location",
            field=models.CharField(default="location", max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="quest",
            name="title",
            field=models.CharField(default="title", max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="adventure_nft",
            name="id",
            field=models.IntegerField(primary_key=True, serialize=False, unique=True),
        ),
    ]
