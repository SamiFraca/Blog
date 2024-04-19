# Code Style Guide

## Naming

### File names

All directories and files have to be written in kebab-case.

**Examples:**

```
apps/hoss-intropia/
components/bar-code.tsx
hooks/use-user-data.ts
```

### Functions, variables, constants

In relation to internal code nomenclatures:

- **Component names** have to be written in PascalCase (f.e.: `BarCode`, `Button`, `Card`)
- **Function names** have to be written in camelCase (f.e.: `getUserId`, `useUserData`)
- **Variables** and **params** have to be written in camelCase (f.e.: `users`, `phoneNumber`)
- **Magic constants** have to be written in SNAKE_CASE and UPPERCASE (f.e.: `NUMBER_OF_ROWS = 3`, `DEFAULT_FLAVOR = 'Springfield'`)

### Another naming recommendations

- Avoid include numbers or versions in names (f.e.: instead of `TendamTextV2`, use `TendamTextClub`)

### Comments

- Write comments in **English**
- If you don't have time to finish something, write `TODO: Task description` to make it easier to locate pending work

## Structures

- Use arrow functions: `const myFunc = () => {}`
- Avoid redundant conditions, like (`something ? true : false`)
- Avoid default exports (anti-pattern)

## Types

- Avoid `any`
- Use TypeScript "interfaces"
- Extend inherited props for React Native components

## Commits names

- The first letter in lower case (f.e.: `fix pressable event on club screen`)
- It must be descriptive and say specifically that they have changed
- Use atomic commits