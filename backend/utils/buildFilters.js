const buildFilters = (query) => {
  const filters = {};

  if (query.end_year) filters.end_year = Number(query.end_year);

  const arrayFilters = [
    "topic",
    "region",
    "country",
    "sector",
    "pestle",
    "source",
    "swot"
  ];

  arrayFilters.forEach(field => {
    if (query[field]) {
      const values = Array.isArray(query[field])
        ? query[field]
        : query[field].split(",");

      filters[field] = { $in: values };
    }
  });

  return filters;
};

module.exports = buildFilters;
