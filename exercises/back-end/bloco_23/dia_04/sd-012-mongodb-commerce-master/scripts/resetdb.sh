#!/bin/bash

if [[ -z "$DBNAME" ]]; then
    printf "You must set envvar DBNAME"
    exit 1
fi
if [[ -z "$1" ]]; then
    printf "You must pass the import dir as the first argument"
    exit 1
fi
DB_RESTORE_DIR=$1

# Reset DB
mongo "$DBNAME" --quiet --eval 'db.dropDatabase()'

# Extract BSON's
for entry in "$DB_RESTORE_DIR"/*.tar.gz
do
    tar -xvf "$entry" -C "$DB_RESTORE_DIR"
done

# Restore collections
for entry in "$DB_RESTORE_DIR"/*.bson
do
    scripts/restore.sh "$entry"
done
