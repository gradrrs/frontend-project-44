#!/usr/bin/env node
import { progressionNumber } from '../src/src/games/brain-progression.js';
import { calculate } from '../src/src/games/brain-calc.js';
import { isEven } from '../src/src/games/brain-even.js';
import { nod } from '../src/src/games/brain-gcd.js';
import {cli, importName} from '../src/src/games/cli.js';
import {isPrimeNumber, isPrime} from '../src/src/games/brain-primenumb.js';
cli();