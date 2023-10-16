import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(str: string) {
  if (!str) return '';
  return str
    .toLowerCase() // Convert the string to lowercase
    .trim() // Trim spaces at the beginning and end of the string
    .replace(/[^a-z0-9\s]/g, '') // Remove non-alphanumeric characters (excluding spaces)
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens if present
}

export function formatDate(dateString: string) {
  console.log('INPUT DATE: ', dateString);
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  return `${month} ${day}, ${year}`;
}
