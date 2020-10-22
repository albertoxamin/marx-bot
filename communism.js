const my = /(?<!\w)(my|mine|their|hers|his|your)(?=\s|$)/gi;
const mio = /(?<!\w)(mio|tuo|suo|vostro)(?=\s|$)/gi;
const mia = /(?<!\w)(mia|tua|sua|vostra)(?=\s|$)/gi;
const miei = /(?<!\w)(miei|tuoi|suoi|vostri)(?=\s|$)/gi;
const mie = /(?<!\w)(mie|tue|sue|vostre)(?=\s|$)/gi;
const notre = /(?<!\w)(mon|ma|ton|ta|son|sa|votre|leur)(?=\s|$)/gi;
const nos = /(?<!\w)(mes|tes|ses|vos|leurs)(?=\s|$)/gi;

module.exports = {
	marxify: (msg) => {
		// English part
		let nms = msg.replace(my, 'OUR');
		// Italian part
		nms = nms.replace(mio, 'NOSTRO');
		nms = nms.replace(mia, 'NOSTRA');
		nms = nms.replace(miei, 'NOSTRI');
		nms = nms.replace(mie, 'NOSTRE');
		// French part
		nms = nms.replace(notre, 'NOTRE');
		nms = nms.replace(nos, 'NOS');
		return nms;
	}
}