import dicoveryLogo from '../img/logos/discovery.png'
import primeLogo from '../img/logos/prime.png'
import paramountLogo from '../img/logos/paramount.png'

const movieProviders = {
    'prime' : {
        logo_path: primeLogo,
        included_with_prime: true,
        provider_name: 'Amazon Prime Video',
        included_sentence: 'Included with Prime'
    },
    'discovery' : {
        logo_path: dicoveryLogo,
        provider_name: 'Dicovery+',
        included_sentence: 'Watch with a 7 day Dicovery+ trial'
    },
    'paramount' : {
        logo_path: paramountLogo,
        provider_name: 'Paramount+',
        included_sentence: 'Watch with a 7 day Paramount+ trial'
    },
}

export default movieProviders;