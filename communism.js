const my = /(?<!\w)(my|mine|their|hers|his|your)(?=\s|$)/gi;
const mio = /(?<!\w)(mio|tuo|suo|vostro)(?=\s|$)/gi;
const mia = /(?<!\w)(mia|tua|sua|vostra)(?=\s|$)/gi;
const miei = /(?<!\w)(miei|tuoi|suoi|vostri)(?=\s|$)/gi;
const mie = /(?<!\w)(mie|tue|sue|vostre)(?=\s|$)/gi;
const unser = /(?<!\w)(mein|dein|sein|ihr|euer)(?=\s|$)/gi;
const unsere = /(?<!\w)(meine|deine|seine|ihre|eure|euere)(?=\s|$)/gi;

module.exports = {
	marxify: (msg) => {
		let nms = msg.replace(my, 'OUR');

		//italian part
		nms = nms.replace(mio, 'NOSTRO');
		nms = nms.replace(mia, 'NOSTRA');
		nms = nms.replace(miei, 'NOSTRI');
		nms = nms.replace(mie, 'NOSTRE');
		// German support
		nms = nms.replace(unser, 'UNSER');
		nms = nms.replace(unsere, 'UNSERE');

		return nms;
	}
}