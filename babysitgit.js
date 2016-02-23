
@@ -1,5 +1,5 @@
		-var start = process.argv[2];
		-var stop = process.argv[3];
		+var start = +process.argv[2];
		+var stop = +process.argv[3];
		 
		 
		
	@@ -8,7 +8,8 @@ var stop = process.argv[3];
		 
		
		 if (start >= 5 && stop <= 4 ) {
		-	console.log("$" + 32 + (12 * (8 - start)) + (16 * stop) + ".00");
		+	var value = 32 + ((8 - start) * 12) + (16 * stop);
		+	console.log("$" + value + ".00");
		 } else {
		 	console.log("You can't start before 5PM or stay after 4AM.");
		 }
	

