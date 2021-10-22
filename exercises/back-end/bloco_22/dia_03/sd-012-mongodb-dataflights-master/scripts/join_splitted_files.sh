#!/bin/bash

if [[ -z "$1" ]]; then
    printf "You must pass the import dir as the first argument"
    exit 1
fi

DB_RESTORE_DIR=$1

# Join splitted dump files
for entry in "$DB_RESTORE_DIR"/*
do
    dumpFilesDir="$entry/splitted-files/"
    if [[ ! -d "$dumpFilesDir" ]]; then
        continue
    fi
    echo "Directory found:" "$entry"
    dumpFile="$entry/dump.tar.gz"
    echo "Dump file to be created:" "$dumpFile"
    ls "$dumpFilesDir"* | xargs cat > "$dumpFile"
done
