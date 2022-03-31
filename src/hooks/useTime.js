const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const getSecondDiff = (timestamp) => (Date.now() - timestamp) / 1000;

const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit };
    }
  }
};

const getTimeAgo = (timestamp, locale) => {
  const rtf = new Intl.RelativeTimeFormat(locale);
  const secondsElapsed = getSecondDiff(timestamp);
  const { value, unit } = getUnitAndValueDate(secondsElapsed);

  return rtf.format(value, unit);
};

const getDateTime = (timestamp, locale) => {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(timestamp));
};

export default function useTimeAgo() {
  const locale = "es";
  const TimeAgo = (timestamp) => getTimeAgo(timestamp, locale);

  const DateTime = (timestamp) => getDateTime(timestamp, locale);

  return {
    DateTime,
    TimeAgo,
  };
}
