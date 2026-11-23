# One Word From Grandma

make.fun bounty entry — [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) (program/v1).

## The entry

**Gugel**

The single word Sam's grandma would text about AI. To an Indonesian
grandma, the talking machine on the phone IS Google — and she spells it
the way she hears it: *Gugel*. A real typo a grandma would actually make,
warm and a little baffled, funny in one word with no caption needed, and
tied straight to the machine she thinks AI is.

Why this word, against the judge's criteria:

1. **Reads as the word a grandma would text about AI** — it is literally
   what she types when the grandchild shows her ChatGPT: she calls it
   Google, spelled her way.
2. **Real grandmother's texting voice** — the phonetic spelling is how
   Indonesian grandmas type: sound over spelling, no autocorrect anxiety.
3. **Funny in one word** — the misspelling IS the joke; it lands instantly.
4. **Tied to AI / machines** — Google is the search-and-answer machine
   every grandma knows; it is not a word that fits any subject.
5. **Fresh, instantly readable** — checked against all 137 visible
   submissions (24 Nov 2026 ~02:30 WIB): the field is flooded with
   Robit / Robut / Doohickey / Contraption / Witchcraft / ChatGBT
   variants. *Gugel* appears in none of them, and anyone can read it.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the word
to `/output/entry.txt`. Outside the grader, `MAKEFUN_OUTPUT_DIR` stands
in for `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program self-checks the gate before writing: UTF-8, 1–30 characters,
exactly one word, not only whitespace — and throws instead of handing
in an invalid entry. Output is fully deterministic: the same word,
`Gugel` (5 characters), every run.

## Bounty

- Prize: $5 total, 8 paid places (1st $1.59 … 8th $0.13)
- Entry fee: $0.00 — free
- Deadline: Fri, 27 Nov 2026 02:05 WIB
- Judging: blind pairwise rounds; a judge model picks the funnier,
  more grandma-like word, two at a time.
