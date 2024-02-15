#!/usr/bin/env node
import { progressionNumber } from '../src/games/brain-progression.js';
import { calculate } from '../src/games/brain-calc.js';
import { isEven } from '../src/games/brain-even.js';
import { nod } from '../src/games/brain-gcd.js';
import {cli, importName} from '../src/games/cli.js';
import {isPrimeNumber, isPrime} from '../src/games/brain-primenumb.js';
cli();