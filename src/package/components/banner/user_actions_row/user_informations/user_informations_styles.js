export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            display: 'flex',
            alignItems: 'center'
        },
        textColumn: {
            marginLeft: spacing * 3,
            '& > *': {
                margin: [spacing * 0.5, 0]
            }
        },
        text: {
            color: '#fff'
        },
        name: {
            extend: 'text',
            fontWeight: 700
        },
        description: {
            extend: 'text'
        },
        [`@media screen and (max-width: ${theme.screenSizes.small}px)`]: {
            container: {
                flexDirection: 'column',
                justifyContent: 'center'
            },
            textColumn: {
                marginLeft: 'unset'
            }
        }
    };
};
