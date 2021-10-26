#!/bin/bash

if [[ -z "$(command -v mongo)" ]]
then
    printf "You must have mongo installed in your machine"
    exit
fi

export DBNAME=commerce

scripts/generate_result.sh "$PWD/challenges" "$PWD/.trybe" "$PWD/assets/produtos" $1
