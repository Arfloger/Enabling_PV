import './js/map/jquery.vmap'
import './js/map/jquery.vmap.russia'

const activeColor = `#C42A2E`

jQuery('#map').vectorMap({
    map: `russia_en`,
    backgroundColor: `transparent`,
    borderColor: `#E0E0E1`,
    borderWidth: 3,
    color: `#2D4E96`,
    colors: {
        ul: activeColor,
        ss: activeColor,
        bs: activeColor,
        ks: activeColor,
    },
    hoverOpacity: 0.7,
    selectedColor: '#2D4E96',
    normalizeFunction: 'polynomial'
});