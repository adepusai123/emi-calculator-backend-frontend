export const ExcelFormulas = {
    PMT: function(rate, nper, pv, fv, type) {
		if (!fv) fv = 0;
		if (!type) type = 0;

		if (rate == 0) return -(pv + fv)/nper;
		
		var pvif = Math.pow(1 + rate, nper);
		var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

		if (type == 1) {
			pmt /= (1 + rate);
		};
		return pmt;
	}
}