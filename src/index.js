import { AssetTree } from './AssetTree';
import { StaticHtmlBuilder } from './core/StaticHtmlBuilder';

try {
    /**
     * Static html generator code. The following logic right now generates only
     * the album static html using hardcoded data in AssetTree class.
     */
    let assetTree = new AssetTree();
    let staticHtmlBuilder = new StaticHtmlBuilder(assetTree);
    staticHtmlBuilder.setup();
    staticHtmlBuilder.build();
}
catch (e) {
    console.log(e)
}
