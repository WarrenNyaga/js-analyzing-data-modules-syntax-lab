function combineUsers(...arrays) {
  const mergedUsers = arrays.flat();
  require('datejs');
  const merge_date = Date.today().toString("M/d/yyyy");

  return {
    users: mergedUsers,
    merge_date: merge_date,
  };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};