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
scripts/exec.sh "db.dropDatabase()"

scripts/join_splitted_files.sh "$DB_RESTORE_DIR"

# Extract BSON's
for assetDirectory in "$DB_RESTORE_DIR"/*/
do
    for compressedFile in "$assetDirectory"*.tar.gz
    do
        tar -xvf "$compressedFile" -C "$assetDirectory"
    done
done

# Restore collections
for entry in "$DB_RESTORE_DIR"/*/*.bson
do
    # Restore dump
    scripts/restore.sh "$entry"
done
