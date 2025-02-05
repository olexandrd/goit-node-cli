# goit-node-cli

## Description

This is a simple CLI application that allows you to work with contacts. You can add, remove, list and get contacts by id.

## Installation

To install the application, you need to clone the repository and install the necessary dependencies. To do this, run the following commands:

```bash
git clone https://github.com/olexandrd/goit-node-cli
cd goit-node-cli
npm install
```

## Usage

To check available options, you need to run the following command:

```bash
node index.js --help
```

Usage example:

```log
node src/index.js -a list
┌─────────┬─────────────────────────┬─────────────────┬─────────────────────────────────────────────────┬──────────────────┐
│ (index) │ id                      │ name            │ email                                           │ phone            │
├─────────┼─────────────────────────┼─────────────────┼─────────────────────────────────────────────────┼──────────────────┤
│ 0       │ 'AeHIrLTr6JkxGE6SN-0Rw' │ 'Allen Raymond' │ 'nulla.ante@vestibul.co.uk'                     │ '(992) 914-3792' │
│ 1       │ 'qdggE76Jtbfd9eWJHrssH' │ 'Chaim Lewis'   │ 'dui.in@egetlacus.ca'                           │ '(294) 840-6685' │
│ 2       │ 'drsAJ4SHPYqZeG-83QTVW' │ 'Kennedy Lane'  │ 'mattis.Cras@nonenimMauris.net'                 │ '(542) 451-7038' │
│ 3       │ 'vza2RIzNGIwutCVCs4mCL' │ 'Wylie Pope'    │ 'est@utquamvel.net'                             │ '(692) 802-2949' │
│ 4       │ '05olLMgyVQdWRwgKfg5J6' │ 'Cyrus Jackson' │ 'nibh@semsempererat.com'                        │ '(501) 472-5218' │
│ 5       │ '1DEXoP8AuCGYc1YgoQ6hw' │ 'Abbot Franks'  │ 'scelerisque@magnis.org'                        │ '(186) 568-3720' │
│ 6       │ 'Z5sbDlS7pCzNsnAHLtDJd' │ 'Reuben Henry'  │ 'pharetra.ut@dictum.co.uk'                      │ '(715) 598-5792' │
│ 7       │ 'C9sjBfCo4UJCWjzBnOtxl' │ 'Simon Morton'  │ 'dui.Fusce.diam@Donec.com'                      │ '(233) 738-2360' │
│ 8       │ 'e6ywwRe4jcqxXfCZOj_1e' │ 'Thomas Lucas'  │ 'nec@Nulla.com'                                 │ '(704) 398-7993' │
│ 9       │ 'rsKkOQUi80UsgVPCcLZZW' │ 'Alec Howard'   │ 'Donec.elementum@scelerisquescelerisquedui.net' │ '(748) 206-2688' │
└─────────┴─────────────────────────┴─────────────────┴─────────────────────────────────────────────────┴──────────────────┘

node src/index.js -a get -i 05olLMgyVQdWRwgKfg5J6
┌─────────┬──────────────────────────┐
│ (index) │ Values                   │
├─────────┼──────────────────────────┤
│ id      │ '05olLMgyVQdWRwgKfg5J6'  │
│ name    │ 'Cyrus Jackson'          │
│ email   │ 'nibh@semsempererat.com' │
│ phone   │ '(501) 472-5218'         │
└─────────┴──────────────────────────┘

node src/index.js -a get -i 05olLMgyVQdWRwgKfg5J6e
null

node src/index.js -a add -n Mango -e mango@gmail.com -p 322-22-22
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ id      │ '1c9cc6ba3c884000' │
│ name    │ 'Mango'            │
│ email   │ 'mango@gmail.com'  │
│ phone   │ '322-22-22'        │
└─────────┴────────────────────┘

node src/index.js -a remove -i qdggE76Jtbfd9eWJHrssH
┌─────────┬─────────────────────────┐
│ (index) │ Values                  │
├─────────┼─────────────────────────┤
│ id      │ 'qdggE76Jtbfd9eWJHrssH' │
│ name    │ 'Chaim Lewis'           │
│ email   │ 'dui.in@egetlacus.ca'   │
│ phone   │ '(294) 840-6685'        │
└─────────┴─────────────────────────┘

node src/index.js -a remove -i qdggE76Jtbfd9eWJHrssH
null
```
