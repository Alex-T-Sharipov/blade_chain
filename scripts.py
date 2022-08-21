

def uniq_nfts(data: list) -> list:
    """
    Given a dictionary from the command line output extracts only elements with uniqiue image identifers
    where for each blockchain entry the last entry known to the system is selected.
    """
    uniq_nfts: list = []
    uniq_nft_img: list = []
    for element in reversed(data):
        if not element["image"] in uniq_nft_img:
            uniq_nfts.append(element)
            uniq_nft_img.append(element["image"])

    return uniq_nfts

def nfts_owned(data: list, indiv: str) -> list:
    """ 
    Given a dataset obtained from the command line it returns entries with NFTs owned by a given individual
    """
    uniq_nfts: list = []
    uniq_nft_img: list = []
    out: list = []

    for element in reversed(data):
        if not element["image"] in uniq_nft_img:
            uniq_nfts.append(element)
            uniq_nft_img.append(element["image"])

    for element in uniq_nfts:
        if element["owner"] == indiv:
            out.append(element)
    
    return out

