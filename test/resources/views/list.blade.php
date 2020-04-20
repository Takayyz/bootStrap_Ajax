<li class="list-unstyled mb-1 list">
    <div class="clearfix bg-white">
        <div class="p-2 float-left">{{ $data['familyName'] }} {{ $data['firstName'] }}</div>
        <div class="p-2 float-left">{{ $data['sex'] }}</div>
        <div class="p-2 float-left">{{ $data['age'] }}代</div>
        <div class="p-2 float-left">{{ $data['e-mail'] }}</div>
        <div class="p-2 float-right btn list-clear">×</div>
    </div>
    <div class="mt-1 bg-white note" style="display: none;">
        <p class="p-2 m-0">{{ $data['note'] }}</p>
    </div>
</li>