const base = `
*,
status,
id,
slug,
titre,
duree,
concept_prix.ConceptPrix_id.concept_prix
`;
const METADATA_PARAMS =`
    metadonnees.id,
	metadonnees.status,
	metadonnees.titre,
	metadonnees.description,
	metadonnees.keywords
`;

const IMAGE_PARAMS = `
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
const articles = `
articles.article_id.title,
articles.article_id.about,
articles.article_id.descripion,
articles.aimage.description,
articles.aimage.filename_disk,
articles.aimage.filename_download,
articles.aimage.filesize,
articles.aimage.id,
articles.aimage.location,
articles.aimage.metadata,
articles.aimage.title,
articles.aimage.type
`;

const emplois = `
id,
title,
contrat,
tags,
address,
remuneration,
about,
description,
tasks,
profile,
benefit,
process,
${METADATA_PARAMS},
${IMAGE_PARAMS}`;

const customers = `
id,
title,
contrat,
tags,
address,
remuneration,
about,
description,
tasks,
profile,
benefit,
process,
${METADATA_PARAMS},
${IMAGE_PARAMS}`;

const page = `
id,
title,
about,
description,
${articles},
${METADATA_PARAMS},
${IMAGE_PARAMS}`;
const formation = `${base},${IMAGE_PARAMS},${sessions}`;

export { formation, emplois, customers, page };
