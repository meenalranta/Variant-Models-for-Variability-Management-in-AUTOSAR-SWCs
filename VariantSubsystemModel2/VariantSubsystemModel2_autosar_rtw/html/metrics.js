function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["rtDW"] = {file: "C:\\Users\\dell\\Documents\\MATLAB\\VariantSubsystemModel2_autosar_rtw\\VariantSubsystemModel2.c",
	size: 20};
	 this.metricsArray.fcn["Rte_IWrite_VariantSubsystemModel2_Runnable_Step_Out1_Out1"] = {file: "C:\\Users\\dell\\Documents\\MATLAB\\VariantSubsystemModel2_autosar_rtw\\stub\\Rte_VariantSubsystemModel2.h",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["Runnable_Init"] = {file: "C:\\Users\\dell\\Documents\\MATLAB\\VariantSubsystemModel2_autosar_rtw\\VariantSubsystemModel2.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["Runnable_Step"] = {file: "C:\\Users\\dell\\Documents\\MATLAB\\VariantSubsystemModel2_autosar_rtw\\VariantSubsystemModel2.c",
	stack: 4,
	stackTotal: 4};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data; }; 
	 this.codeMetricsSummary = '<a href="VariantSubsystemModel2_metrics.html">Global Memory: 20(bytes) Maximum Stack: 4(bytes)</a>';
	}
CodeMetrics.instance = new CodeMetrics();
