function getInitials(firstName, lastName) {
  if (!firstName && !lastName) return '';

  const firstInitial = firstName?.charAt(0).toUpperCase() || '';
  const lastInitial = lastName?.charAt(0).toUpperCase() || '';

  return `${firstInitial}${lastInitial}`;
}
