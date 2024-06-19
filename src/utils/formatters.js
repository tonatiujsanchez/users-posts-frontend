
export const dateFormat = ( date) => {
    
    const longDate = new Date(date)
        .toLocaleDateString('es-ES',{
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'UTC' // Establece la zona horaria a UTC
        })
    
    return longDate.substring(0,1).toUpperCase() + longDate.substring(1)
}

