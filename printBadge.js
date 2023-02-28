function printBadge() {
  // Get the badge element and create a new window to print it
  var badge = document.getElementById("badge");
  var printWindow = window.open('', 'Print', 'height=400,width=600');

  // Write the badge HTML to the new window and print it
  printWindow.document.write(badge.innerHTML);
  printWindow.print();
  printWindow.close();
}
