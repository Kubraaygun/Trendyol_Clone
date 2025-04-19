function getInitials(firstName, lastName) {
  if (!firstName && !lastName) return '';

  const firsInitial = firstName?.charAt(0).toUpperCase() || '';
  const lastInitial = lastName?.charAt(0).toUpperCase() || '';

  return `${firstInitial}${lastInitial}`;
}
