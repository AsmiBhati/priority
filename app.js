
document.getElementById('entryForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const priority = parseInt(document.getElementById('priority').value);
  
    addCustomerToQueue(name, priority);
  
    document.getElementById('name').value = '';
  });
  
  const queue = [];
  
  function addCustomerToQueue(name, priority) {
    const arrivalTime = new Date().getTime(); 
  
    if (priority === 1) {
      document.getElementById('vipSound').play();
    }
  
    queue.push({ name, priority, arrivalTime });
  
    queue.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.arrivalTime - b.arrivalTime; 
      }
      return a.priority - b.priority;
    });
  
    displayQueue();
  }
  function displayQueue() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = ''; 

    queue.forEach(customer => {
      const li = document.createElement('li');
      li.innerHTML = `${customer.name} - Priority: ${customer.priority}`;
  

      if (customer.priority === 1) {
        li.style.backgroundColor = 'gold';
        li.classList.add('vip'); 
      } else if (customer.priority === 2) {
        li.style.backgroundColor = 'lightblue';
      } else if (customer.priority === 3) {
        li.style.backgroundColor = 'lightgreen';
      }
  
      queueList.appendChild(li); 
    });
  }
  