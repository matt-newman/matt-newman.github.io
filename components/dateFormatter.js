export const dateFormatter = ( dateString, dateOptions={} ) => {
    const date = new Date( dateString );
    // Then specify how you want your dates to be formatted
    return new Intl.DateTimeFormat( 'default' , dateOptions ).format( date );
};