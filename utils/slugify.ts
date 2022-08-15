
function slugify (entry: string): string {
  entry = entry.replace(/^\s+|\s+$/g, ''); // trim
  entry = entry.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      entry = entry.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  entry = entry.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

  return entry;
}

export {slugify};