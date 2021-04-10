#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';




const program = new Command();
const { prompt } = inquirer;


// console.log(chalk.blue(figlet.textSync('Test')));

program
  .version('1.0.0')
  .description(chalk.cyanBright(figlet.textSync('MyToDo')));


  program
  .command('new')
  .alias('n')
  .description(chalk.green('Create new ToDo'))
  .action(() => {
    prompt(contactsPrompts).then(({ firstName, lastName, phoneNumber }) => {
      const key = firstName + ' ' + lastName;
      let contacts = getContacts();
      contacts[key] = { firstName, lastName, phoneNumber };
      saveContacts(contacts);
      log(chalk.cyanBright('Usuario creado correctamente!! 🎉 '));
    });
  });




  program.parse(process.argv);

