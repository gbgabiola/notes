function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  if (newManifest.unit === 'lb') {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = 'kg';
  }
  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};

  const schema = {
    containerId: v => typeof v === 'number' && Number.isInteger(v) && v > 0,
    destination: v => typeof v === 'string' && v.trim() !== '',
    weight: v => typeof v === 'number' && v > 0 && !Number.isNaN(v),
    unit: v => v === 'kg' || v === 'lb',
    hazmat: v => typeof v === 'boolean',
  };

  for (const key in schema) {
    if (manifest[key] === undefined) {
      errors[key] = 'Missing';
    } else if (!schema[key](manifest[key])) {
      errors[key] = 'Invalid';
    }
  }

  return errors;
}

function processManifest(manifest) {
  const validationResult = validateManifest(manifest);

  if (Object.keys(validationResult).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
  }
}
