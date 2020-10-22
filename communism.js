const my = /(?<!\w)(my|mine|their|hers|his|your)(?=\s|$)/gi;
const mio = /(?<!\w)(mio|tuo|suo|vostro)(?=\s|$)/gi;
const mia = /(?<!\w)(mia|tua|sua|vostra)(?=\s|$)/gi;
const miei = /(?<!\w)(miei|tuoi|suoi|vostri)(?=\s|$)/gi;
const mie = /(?<!\w)(mie|tue|sue|vostre)(?=\s|$)/gi;
const nuestro = /(?<!\w)(mi|tu|vuestro|su)(?=\s|$)/gi;
const nuestros = /(?<!\w)(mis|tus|vuestros|sus)(?=\s|$)/gi;
const nuestra = /(?<!\w)(vuestra)(?=\s|$)/gi;
const nuestras = /(?<!\w)(vuestras)(?=\s|$)/gi;

module.exports = {
	marxify: (msg) => {
		let nms = msg.replace(my, 'OUR');

		//italian part
		nms = nms.replace(mio, 'NOSTRO');
		nms = nms.replace(mia, 'NOSTRA');
		nms = nms.replace(miei, 'NOSTRI');
		nms = nms.replace(mie, 'NOSTRE');
		//Spanish part
		nms = nms.replace(nuestro, 'NUESTRO');
		nms = nms.replace(nuestros, 'NUESTROS');
		nms = nms.replace(nuestra, 'NUESTRA');
		nms = nms.replace(nuestras, 'NUESTRAS');

		return nms;
	}
}