#!/bin/bash

if [[ -z "$1" ]]; then
    printf "You must pass the challenges dir as the first argument"
    exit 1
fi
CHALLENGES_DIR=$1
if [[ -z "$2" ]]; then
    printf "You must pass the Trybe dir as the second argument"
    exit 1
fi
TRYBE_DIR=$2
if [[ -z "$3" ]]; then
    printf "You must pass the Trybe DB restore dir as the third argument"
    exit 1
fi
DB_RESTORE_DIR=$3

UNIT_FILE=$4

RESULTS_DIR="/tmp/trybe-results"
rm -rf "$RESULTS_DIR"
mkdir "$RESULTS_DIR"
touch "$RESULTS_DIR/evaluation.out"

print_results() {
  printf "\n======================= RESULTS ======================="
  printf "$(cat /tmp/trybe-results/evaluation.out)"
  printf "\n======================= RESULTS =======================\n"
}

run_evaluate() {
  scripts/resetdb.sh "$DB_RESTORE_DIR"
  # Build path to results dir
  resultPath="$RESULTS_DIR/$chName"
  touch "$resultPath"
  # Check if challenge MQL file exists
  mqlFile="$CHALLENGES_DIR/$chName".js
  if [ ! -f $mqlFile ]; then
    printf "\n%s: \e[1;31mfailed \e[0m" "$chName" >> "$RESULTS_DIR/evaluation.out"
    print_results
  else
    # Exec mongo query
    mql=$(cat "$mqlFile")
    scripts/exec.sh "$mql" &> "$resultPath"
    # Check result with the expected
    diff=$(diff "$resultPath" "$TRYBE_DIR/expected-results/$chName")
    if [[ ! -z "$diff" ]]; then
      printf "\n%s: \e[1;31mfailed \e[0m" "$chName" >> "$RESULTS_DIR/evaluation.out"
      print_results
    else  
      printf "\n%s: \e[1;42mpassed \e[0m" "$chName" >> "$RESULTS_DIR/evaluation.out"
      print_results
    fi
  fi  
}

# Print tests evaluation
if [[ -z "$UNIT_FILE" ]]; then
  for entry in "$TRYBE_DIR/expected-results"/*
  do
    chName=$(echo "$(basename $entry)" | sed -e "s/.js//g")
    run_evaluate
  done
else
  chName=$UNIT_FILE
  run_evaluate
fi

scripts/resetdb.sh "$DB_RESTORE_DIR"
