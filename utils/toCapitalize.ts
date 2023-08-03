export function toCapitalize(text: string) {
  const words = text.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return word;
    }

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(" ");
}
