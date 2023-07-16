const base = `
*,
status,
id,
slug,
titre,
duree,
concept_prix.ConceptPrix_id.concept_prix
`;
const IMAGE_PARAMS =`
    image.description,
    image.filename_disk,
    image.filename_download,
    image.filesize,
    image.id,
    image.location,
    image.metadata,
    image.title,
    image.type
`;
const sessions = `
session.Session_id.date_heure,
session.Session_id.duree,
session.Session_id.horaire_formation,
session.Session_id.type_formation
`;

const formation = `${base},${IMAGE_PARAMS},${sessions}`;

export {
  formation
}