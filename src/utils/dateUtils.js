// utils/dateUtils.js
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  };
  
  export const formatTime = (timeString) => {
    const date = new Date(`1970-01-01T${timeString}Z`);
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  